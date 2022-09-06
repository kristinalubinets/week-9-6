//160. Intersection of Two Linked Lists
/************************************************* using hash Set *************************************************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    
    let setA = new Set();
    let pA = headA;
    let pB = headB;
    
    while(pA !== null) {
        if(!setA.has(pA)) {
            setA.add(pA);
        }
        pA = pA.next;
    }
    
    while(pB !== null) {
        if(setA.has(pB)) {
            return pB;
        }
        pB = pB.next;
    }
};

/********************** no extra space, using two pointers (to find shortest list in the first iteration, and then begin comparing  from the same amount of node from the end)  
 * ******************** instead of manually counting difference */
var getIntersectionNode = function(headA, headB) {
    
    let pA = headA;
    let pB = headB;
    
    while(pA !== pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }
   return pA;
};
