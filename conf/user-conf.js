/**
 * @version 1.0
 * @author Jock
 *
 * The main configuration file is some constant,
 * for the basic configuration of the framework.
 *
 *
 */



/**
 * Default port
 * @const
 */
exports.port = 52120; 

/**
 * Default debug
 * @const
 */
exports.debug = true;

/**
 * Default enable compression
 * @const
 */
exports.enableCompress = false;

/**
 * Default version
 * @const
 */
exports.version = ''

/**
 * Default root path
 * @const
 */
exports.root = '/home/www/release/node/fp00/jockjs/libs';

/**
 * Default user root path
 * @const
 */
exports.userRoot = '/home/www/release/node/fp00/jockjs-business-user';

/**
 * Default user modules
 * @const
 */
exports.userModules = ['site','user'];

/**
 * Default component root path
 * @const
 */
exports.componentRoot = '/home/www/release/node/fp00/jockjs-components';

/**
 * Default user modules
 * @const
 */
exports.componentModules = ['utils','ui','logger'];

/**
 * Default javascript host
 * @const
 */
exports.jsHost = 'http://jockjs.fp00.dev.aifcdn.com/';

/**
 * Default javascript path
 * @const
 */
exports.jsPath = 'js';

/**
 * Default style hosts
 * @const
 */
exports.cssHost = 'http://jockjs.fp00.dev.aifcdn.com/';

/**
 * Default style path
 * @const
 */
exports.cssPath = 'css';

/**
 * Default except -> uglify object property
 * @const
 */
exports.except = ['J','eval'];
