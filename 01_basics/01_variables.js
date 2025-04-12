/*  prefer not to use var   
because of issue in block scopr and functional scope
*/
const accountId = 1442353;  //camle case     --const cann't be change
let accouneEmail ="abhinandanpandey@gmail.com"  //can change ✅
var accountPassword = "12345"   //var is now less used 
accountCity = " Jaiput"    //also create a variable  -but never prefer
let accouneState ;

// accountId = 3;
accouneEmail ="abhaisdsf@gmail.com"
accountPassword ="425353"
accountCity ="london"
console.log(accountId);
console.table([accountId ,accouneEmail,accountPassword ,accountCity ,accouneState])     //show in table view 