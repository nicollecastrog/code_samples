({
  wrap: {
    startFile: ["require.js"],
    endFile: []
  },
  baseUrl: ".",
  name: "main",
  out: "main-built.js",
  paths: {
    'jQuery': 'jquery-2.1.1.min'
  },
  shim: {
    'jQuery': {
      exports: 'jQuery'
    }
  }
})