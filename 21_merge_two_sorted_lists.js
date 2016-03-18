/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1==null && l2==null){return null;}
    else if(l1!=null && l2==null){return l1;}
    else if(l2!=null && l1==null){return l2;}
    else{
        var head = null;
        var tail = null;
        while(l1!=null && l2 != null){
            if(head==null){ 
                if(l1.val<=l2.val){
                    head=l1;
                    tail=l1;
                    l1=l1.next;
                    continue;
                }else{
                    head=l2;
                    tail=l2;
                    l2=l2.next;
                    continue;
                }  
            }else{
                if(l1.val<=l2.val){
                    tail.next = l1;
                    tail=tail.next;
                    l1=l1.next;
                    continue;
                }else{
                    tail.next = l2;
                    tail=tail.next;
                    l2=l2.next;
                    continue;
                }
            }
        }
        if(l1!=null){tail.next = l1;}
        else if(l2!=null){tail.next = l2;}
        return head;
    }
};
