<<<<<<< HEAD
/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
/* eslint-env node */
module.exports = {
  command: 'ember test',
  scenarios: [{
    name: 'default',
    bower: {
      dependencies: {}
    }
  }, {
    name: 'ember-1.13',
    bower: {
      dependencies: {
        'ember': '~1.13.0',
        'ember-data': '~1.13.0',
        'ember-cli-shims': '0.0.6'
      }
    },
    npm: {
      dependencies: {
        'ember-get-helper': '^1.0.4'
      },
      devDependencies: {
        'ember-cli-shims': null,
        'ember-data': '~1.13.0',
        'ember-source': null
=======
module.exports = {
  scenarios: [
    {
      name: 'ember-lts-2.12',
      npm: {
        devDependencies: {
          'ember-source': '~2.12.0'
        }
      }
    },
    {
      name: 'ember-lts-2.16',
      npm: {
        devDependencies: {
          'ember-source': '~2.16.0'
        }
>>>>>>> 4467d95... message
      }
    }
  }, {
    name: 'ember-lts-2.4',
    bower: {
      dependencies: {
        'ember': 'components/ember#lts-2-4'
      },
      resolutions: {
        'ember': 'lts-2-4'
      }
    }
  }, {
    name: 'ember-lts-2.8',
    bower: {
      dependencies: {
        'ember': 'components/ember#lts-2-8'
      },
      resolutions: {
        'ember': 'lts-2-8'
      }
    }
  }, {
    name: 'ember-2.12',
    bower: {
      dependencies: {
        'ember': '~2.12.0'
      }
    },
    npm: {
      dependencies: {
        'ember-data': '~2.12.0'
      }
    }
  }, {
    name: 'ember-release',
    bower: {
      dependencies: {
        'ember': 'components/ember#release',
        'ember-data': null
      },
      resolutions: {
        'ember': 'release'
      }
    },
    npm: {
      dependencies: {
        'ember-data': '~2.13.0'
      }
    }
  }, {
    name: 'ember-beta',
    bower: {
      dependencies: {
        'ember': 'components/ember#beta',
        'ember-data': 'components/ember-data#beta'
      },
      resolutions: {
        'ember': 'beta',
        'ember-data': 'beta'
      }
    }
  }, {
    name: 'ember-canary',
    bower: {
      dependencies: {
        'ember': 'components/ember#canary',
        'ember-data': 'components/ember-data#canary'
      },
      resolutions: {
        'ember': 'canary',
        'ember-data': 'canary'
      }
    }
  }]
};
