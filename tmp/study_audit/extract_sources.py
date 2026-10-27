"""Reuse page text for the seven approved CSDL PDFs; never modify sources."""

from __future__ import annotations

import argparse
import hashlib
import json
import logging
from pathlib import Path
import sys

CACHE_VERSION = 1
CACHE = Path(__file__).resolve().parent
SOURCES = [
    ("T1", "Lý thuyết/DPL_Chuong 1 - Tong quan.pdf"),
    ("T2", "Lý thuyết/DPL_Chuong 2 - Mo hinh Du lieu Quan he.pdf"),
    ("T3", "Lý thuyết/DPL_Chuong 3 - Dai so Quan he.pdf"),
    ("T4", "Lý thuyết/DPL_Chuong 4 - SQL.pdf"),
    ("E23", "Giữa kỳ/2023_2024_HK1_DE THI GIUA KY_CSDL.pdf"),
    ("E24", "Giữa kỳ/2024_2025_HK1_DE THI GIUA KY_CSDL.pdf"),
    ("E25", "Giữa kỳ/2025_2026_HK1_DE THI GIUA KY_CSDL.pdf"),
]


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def valid_cache(row: dict, source_hash: str, relative: str) -> bool:
    try:
        if row["cache_version"] != CACHE_VERSION or row["source"] != relative:
            return False
        if row["sha256"] != source_hash:
            return False
        text_path, pages_path = CACHE / row["text"], CACHE / row["pages_json"]
        if digest(text_path) != row["text_sha256"]:
            return False
        if digest(pages_path) != row["pages_sha256"]:
            return False
        pages = json.loads(pages_path.read_text(encoding="utf-8"))
        return len(pages) == row["page_count"] and [p["page"] for p in pages] == list(range(1, len(pages) + 1))
    except (KeyError, OSError, ValueError, TypeError):
        return False


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-root", type=Path, default=CACHE.parents[1])
    parser.add_argument("--verify-only", action="store_true", help="Verify hashes without extraction or writes")
    args = parser.parse_args()
    root = args.source_root.resolve()
    manifest_path = CACHE / "manifest.json"
    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        manifest = {"sources": []}
    previous = {row["id"]: row for row in manifest.get("sources", [])}
    records, invalid = [], []
    changed = False
    for sid, relative in SOURCES:
        source = root / relative
        if not source.is_file():
            print(f"{sid}: missing source: {relative}", file=sys.stderr)
            return 2
        source_hash = digest(source)
        row = previous.get(sid, {})
        if valid_cache(row, source_hash, relative):
            records.append(row)
            print(f"{sid}: cache valid ({row['page_count']} pages), no PDF extraction")
            continue
        if args.verify_only:
            invalid.append(sid)
            print(f"{sid}: source/cache changed or missing", file=sys.stderr)
            continue
        from pypdf import PdfReader

        logging.getLogger("pypdf").setLevel(logging.ERROR)
        reader = PdfReader(source)
        pages = []
        for number, page in enumerate(reader.pages, 1):
            text = page.extract_text() or ""
            pages.append({"page": number, "text": text, "chars": len(text)})
        text_path, pages_path = CACHE / f"{sid}.txt", CACHE / f"{sid}.json"
        text_path.write_text("\n\n".join(f"[PDF PAGE {p['page']}]\n{p['text']}" for p in pages) + "\n", encoding="utf-8")
        pages_path.write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding="utf-8")
        records.append({"id": sid, "source": relative, "sha256": source_hash,
                        "page_count": len(pages), "text": text_path.name, "pages_json": pages_path.name,
                        "text_sha256": digest(text_path), "pages_sha256": digest(pages_path),
                        "extractor": "pypdf", "cache_version": CACHE_VERSION})
        changed = True
        print(f"{sid}: extracted {len(pages)} pages")
    if invalid:
        return 2
    if changed:
        manifest_path.write_text(json.dumps({"sources": records, "page_numbering": "physical PDF pages, 1-based",
                                             "source_root": ".", "cache_version": CACHE_VERSION},
                                            ensure_ascii=False, indent=2), encoding="utf-8")
        print("Source/cache updated. Review scope, question index and visual evidence where affected.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    raise SystemExit(main())
