class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) { // s="racecar" t="carrace"
        if (s.length !== t.length) { // length check
            return false;
        }

        // const countS = {}; // initialize objects for both strings s & t
        // const countT = {};
        // for (let i = 0; i < s.length; i++) {
        //     countS[s[i]] = (countS[s[i]] || 0) + 1; // s[i] -> s[0] -> "r"
        //     countT[t[i]] = (countT[t[i]] || 0) + 1; // t[i] -> t[0] -> "c"
        // } // countS & countT objects should be loaded up with key:val pairs
        // for (let key in countS) {
        //     if (countS[key] !== countT[key]) {
        //         return false;
        //     }
        // }
        // return true;
        const count = new Array(26).fill(0); // s="racecar" [0,6]
        for (let i = 0; i < s.length; i++) { // ex: i = 0 ('r')
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++; // s.charCodeAt(0) -> 'r' 114 - 'a'.charCodeAt(0) - 97 = index 17 -> count[17]++
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--; // t.charCodeAt(0) -> 'r' 114 - 'a'.charCodeAt(0) - 97 = index 17 -> count[17]--
        }
        return count.every((val) => val === 0); // return false if not === 0.  
    } // count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      //         [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
}
