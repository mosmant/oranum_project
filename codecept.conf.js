exports.config = {
  output: './output',
  mocha: {
    reporterOptions: {
      reportDir: './output', 
      reportName: 'index', 
      reportTitle: 'Test Reports', 
      inlineAssets: true, 
    }
  },
  helpers: {
    Playwright: {
      url: 'https://www.oranum.com/',
      show: false,
      browser: 'chromium'
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    },
    Mochawesome: {
      uniqueScreenshotNames: true
  }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'demo'
}