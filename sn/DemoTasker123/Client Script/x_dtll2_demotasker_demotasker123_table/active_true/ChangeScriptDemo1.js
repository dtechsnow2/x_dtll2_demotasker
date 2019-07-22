/* 
 * Application : DemoTasker123
 * ClassName   : sys_script_client
 * Created On  : 2019-06-18 17:38:17
 * Created By  : admin
 * Updated On  : 2019-06-28 13:19:05
 * Updated By  : admin
 * URL         : /sys_script_client.do?sys_id=0b22b0324f8233009e9f0f5e9310c77a
 */
/**
* ChangeScriptDemo1 - sends a greeting from Test Table 2.
*
* @param control a control
* @returns nothing really
*/
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   g_form.addInfoMessage("Connected");
}
