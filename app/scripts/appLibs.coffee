window._ = require 'lodash'
window.Dispatcher = require('flux').Dispatcher
window.EventEmitter = require 'eventEmitter'
window.accounting = require 'accounting'

# jQuery plugins
require 'jquery.role'
require 'jquery.mmenu'

# Others
require 'bootstrapSass'
require 'owlCarousel'
require 'fancybox'
require 'fancybox.wannabe'
require 'nouislider'

window.accounting.settings =
  currency:
    symbol:    'руб.'    # // default currency symbol is '$'
    format:    '%v %s'  # // controls output: %s = symbol, %v = value/number (can be object: see below)
    decimal:   ','     # // decimal point separator
    thousand:  ' '    # // thousands separator
    precision: 0     # // decimal places
  number:
    precision: 0     # // default precision on numbers is 0
    thousand:  ''
    decimal:   ','