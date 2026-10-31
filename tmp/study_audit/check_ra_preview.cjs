const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('C:/Users/phuoc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({headless:true, executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'});
  const page = await browser.newPage({viewport:{width:736,height:850}});
  const errors = [];
  page.on('pageerror', error=>errors.push(error.message));
  await page.goto(pathToFileURL(path.join(__dirname,'ra-chon-chieu-preview.html')).href);
  const frame = page.frameLocator('iframe');
  const host = frame.locator('#ra-chon-chieu-28oct');
  await host.waitFor();
  await frame.locator('[data-ra-result] tr').first().waitFor();
  async function snapshot() {
    return {
      rows: await frame.locator('[data-ra-result] tr').count(),
      columns: await frame.locator('[data-ra-head] th').allTextContents(),
      values: await frame.locator('[data-ra-result]').textContent(),
      sourceRows: await frame.locator('[data-ra-source] tr').count()
    };
  }
  const selected = await snapshot();
  if(selected.rows!==2 || selected.columns.length!==4 || selected.columns[3]!=='Luong' || selected.sourceRows!==4) throw new Error('Selection result wrong: '+JSON.stringify(selected));
  await frame.locator('[data-ra-mode="project"]').click();
  const projected = await snapshot();
  if(projected.rows!==2 || projected.columns.join()!=='Phong' || projected.values!=='PB01PB02') throw new Error('Projection result wrong: '+JSON.stringify(projected));
  await frame.locator('[data-ra-mode="combined"]').click();
  const combined = await snapshot();
  if(combined.rows!==2 || combined.columns.join()!=='MaNV,HoTen' || !combined.values.includes('NV01') || !combined.values.includes('NV03')) throw new Error('Combined result wrong: '+JSON.stringify(combined));
  await page.screenshot({path:path.join(__dirname,'visuals','ra-chon-chieu-desktop.png'),fullPage:true});
  await page.setViewportSize({width:320,height:850});
  const overflow = await host.evaluate(node=>({width:node.ownerDocument.documentElement.clientWidth, scroll:node.ownerDocument.documentElement.scrollWidth}));
  if(overflow.scroll>overflow.width+1) throw new Error('Mobile overflow: '+JSON.stringify(overflow));
  await page.screenshot({path:path.join(__dirname,'visuals','ra-chon-chieu-mobile.png'),fullPage:true});
  if(errors.length) throw new Error('Browser errors: '+errors.join('; '));
  console.log(JSON.stringify({selected,projected,combined,mobile:overflow,errors}));
  await browser.close();
})().catch(error=>{console.error(error);process.exitCode=1;});
