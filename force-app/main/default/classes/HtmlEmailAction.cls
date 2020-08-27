global class HtmlEmailAction {
    global class EmailActionRequest {
        @InvocableVariable
        global String senderName;

        @InvocableVariable
        global String replyToEmail;

        @InvocableVariable
        global String recipientName;

        @InvocableVariable
        global String sendToEmail;
        
        @InvocableVariable
        global String subject;
        
        @InvocableVariable
        global String htmlBody;
    }

    global class EmailActionResult {
        @InvocableVariable
        global Boolean isSuccess;
    
        @InvocableVariable
        global String errorMessage;
    }

    @InvocableMethod(label='Send HTML Email' configurationEditor='c-html-email-editor')
    global static List<EmailActionResult> sendEmails(List<EmailActionRequest> requests) {
        List<EmailActionResult> results = new List<EmailActionResult>();

        for(EmailActionRequest request : requests){
            results.add(sendEmail(request));
        }
    
        return results;
    }
    
    public static EmailActionResult sendEmail(EmailActionRequest request) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();

        String[] sendToEmail = new String[]{ request.sendToEmail };
        mail.setToAddresses(sendToEmail);
        mail.setSenderDisplayName(request.senderName);
        mail.setReplyTo(request.replyToEmail);
        mail.setSubject(request.subject);
        mail.setHtmlBody(request.htmlBody);
        mail.setOptOutPolicy('FILTER');

        Messaging.SingleEmailMessage[] messages = new List<Messaging.SingleEmailMessage>();
        messages.add(mail);

        Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);
        EmailActionResult emailActionResult = new EmailActionResult();

        for(Messaging.SendEmailResult result :results) {                
            if(result.IsSuccess()) {
                emailActionResult.isSuccess = true;
            } else {
                emailActionResult.isSuccess = false;
                Messaging.SendEmailError[] errors = result.getErrors(); 
                if (errors.size() > 0 ){
                    emailActionResult.errorMessage = errors[0].getMessage();
                }
            }
        } 

        return emailActionResult;
    }
}