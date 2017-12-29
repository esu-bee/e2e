var prot = require('protractor');
  exports.config = {
  framework: 'jasmine',
  
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
    "chromeOptions": {
      args: ["--window-size=1024,900", "--disable-gpu"],
      binary: 'node_modules/puppeteer/.local-chromium/win64-515411/chrome-win32/chrome.exe'
    }
  },

  specs: ['spec.ts'],

  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true,

  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000,
    isVerbose: true,
    includeStackTrace: true
  },

  onPrepare: () => {
    require('ts-node').register({
      project: './tsconfig.e2e.json'
    });

    prot.browser.driver.getCapabilities().then(function (capability) {
      prot.browser.browserName = capability.get('browserName');
  });
  }
};