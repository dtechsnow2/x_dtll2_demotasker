/* 
 * Application : DemoTasker123
 * ClassName   : sys_script
 * Created On  : 2019-06-13 17:55:54
 * Created By  : admin
 * Updated On  : 2019-06-13 19:06:35
 * Updated By  : admin
 * URL         : /sys_script.do?sys_id=41d6cb4d4f4233009e9f0f5e9310c7ec
 */
/**
* Demo Rule 2- sends a greeting from Test Table 2.
* @function DemoRule2
* @param {Object} current The current record
* @param {Object} previous The previous record 
*/
(function executeRule(current, previous /*null when async*/) {

	gs.info("Hello World!");

})(current, previous);
