/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    first = head;
    cache=[];
    cache.push(head);
    node = head;
    while(node.next!=null){
        node=node.next;
        cache.push(node);
        
    }
    if(cache.length==n){
        return first.next;
    }else{
        cache[cache.length-(n+1)].next=cache[cache.length-(n-1)]
    }
    
    return first;
};
