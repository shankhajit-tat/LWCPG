public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [
            SELECT Id, Name, Title, Phone, Email, Picture__c
            FROM Contact
            WHERE Picture__c != NULL
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
    @AuraEnabled(cacheable=true)
    public static Contact getSingleContact() {
        return [
            SELECT Id, FirstName, LastName, Phone, Email, Picture__c, LastModifiedDate
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 1
        ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactListForDatatable() {
        return [
            SELECT Id, FirstName, LastName , Title, Phone, Email, Picture__c
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 10
        ];
    }
    @AuraEnabled
    public static Boolean updateContacts(List<Sobject> contactlist){
        update contactlist;
        return true;
    }
}