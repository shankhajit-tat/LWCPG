public with sharing class AccountController {
    public AccountController() {

    }
    @AuraEnabled
    public  static List<Account> getAccountList(){
        return new List<Account>();
    }
}