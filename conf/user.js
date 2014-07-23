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
exports.port = 52601; 

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
exports.root = '/home/www/release/node/user/jockjs/libs';

/**
 * Default user root path
 * @const
 */
exports.userRoot = '/home/www/release/node/user/jockjs-business-user';

/**
 * Default user modules
 * @const
 */
exports.userModules = ['site','user'];

/**
 * Default component root path
 * @const
 */
exports.componentRoot = '/home/www/release/node/user/jockjs-components';

/**
 * Default user modules
 * @const
 */
exports.componentModules = ['utils','ui','logger'];

/**
 * Default pages host
 * @const
 */
exports.pageHost = 'http://pages.aifcdn.com/';

/**
 * Default pages host
 * @const
 */
exports.crossOrigin= '*';

/**
 * Default javascript host
 * @const
 */
exports.jsHost = 'http://SERVERNAME/';

/**
 * Default javascript path
 * @const
 */
exports.jsPath = 'ujs';

/**
 * Default style hosts
 * @const
 */
exports.cssHost = 'http://SERVERNAME/';

/**
 * Default style path
 * @const
 */
exports.cssPath = 'ucss';

/**
 * Default except -> uglify object property
 * @const
 */
exports.except = ['J','eval'];
