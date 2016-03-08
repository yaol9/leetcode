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
var deleteDuplicates = function(head) {
    var save = head;
    if(head==null)return null;
    while(head!=null){
        next = head.next;
        while(next!=null && next.val==head.val){
            head.next= next.next;
            next = next.next;
            
        }
        head=head.next;
    }
    return save;
};
