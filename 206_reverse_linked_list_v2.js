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
        var post = head.next;
        head.next=newhead;
        newhead=head;
        head=post;
    }
    return newhead;
};
