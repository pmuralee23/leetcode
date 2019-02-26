//https://leetcode.com/problems/merge-two-sorted-lists/submissions/
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
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;

    const l3 = l1.val < l2.val ? new ListNode(l1.val) : new ListNode(l2.val);
    
    if (l1.val < l2.val && l1.next === null) {
        l3.next = l2;
    } else if (l2.val < l1.val && l2.next === null) {
        l3.next = l1;
    } else {
        l3.next = l1.val < l2.val ? mergeTwoLists(l1.next, l2) : mergeTwoLists(l1, l2.next);   
    }
    
    return l3;
};
