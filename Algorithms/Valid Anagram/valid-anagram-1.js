var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var hash1 = {}, hash2 = {};
    hash1 = makehash(s);
    hash2 = makehash(t);
    for (var key in hash1){
        if(hash1[key] !== hash2[key]){
            return false;
        }
    }
    return true;
};
function makehash(s) {
    var hash = {};
    for(var i=0; i<s.length; i++){
        if(!hash[s[i]]) {
            hash[s[i]] = 1;
        } else {
            hash[s[i]]++;
        }
    }
    return hash;
}
