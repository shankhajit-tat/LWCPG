trigger AccountTrigger on Account (before insert) {
    //simulate server error for LWC component
    for( Account acc: Trigger.new){
        if(acc.Name == 'Error')
            acc.addError('DemoErrorException');
    }
}