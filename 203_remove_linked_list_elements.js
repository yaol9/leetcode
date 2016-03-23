/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var pre=null;
    var first=head;
    while(head){
        if(head.val==val){
            if(pre){
                pre.next=head.next;
            }else{
                first=head.next;
            }
        }else{
            pre=head;
        }
        head=head.next;
    }
    return first;
};
