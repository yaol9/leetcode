/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var newhead=null;
    while(head!=null){
        if(newhead==null){
            newhead=new ListNode();
            newhead.val=head.val;
            newhead.next=null;
        }else{
            var temp = newhead;
            newhead=new ListNode();
            newhead.val=head.val;
            newhead.next=temp;
        } 
        
        head=head.next;
    }
    return newhead;
};
