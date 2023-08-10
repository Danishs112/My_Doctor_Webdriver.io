/**
 * This module abstracts the test configuration settings.
 * It provides method to retrieve stored configuration for test as well as helper methods to retrieve common
 * configuration settings.
 * 

// Configuration path keys used in configuration file


/**
 * Retrieves the value stored at a given configuration path key
 *
 * @param {string} configKey any valid configuration path key
 * @returns value stored at given configKey. Throws error if configKey is invalid.
 */

import config from "config";

// exports.getConfig = function (configKey) {
// 	return config.get(configKey);
// };

// /**
//  * Returns the configured directory path for the cucumber json test report
//  *
//  * @returns directory path for json test report
//  */
// exports.getJsonTestReportDirectory = function () {
// 	return config.get(CONFIG_JSON_REPORT_DIR);
// };

// /**
//  * Returns the configured file path for the cucumber html test report
//  *
//  * @returns file path for html test report
//  */
// exports.getHtmlTestReportFilePath = function () {
// 	return config.get(CONFIG_HTML_REPORT_FILE);
// };

// /**
//  * Returns the configured directory path for storing test logs
//  *
//  * @returns logs directory path
//  */
// exports.getLogDirectoryPath = function () {
// 	return config.get(CONFIG_LOG_DIR);
// };

// /**
//  * Returns the configured home url
//  *
//  * @returns home url
//  */
export const getHomeUrl = function () {
	return config.get("homeUrl");
};

export const getUrls = function(url) {
    return config.get("urls." + url)
}