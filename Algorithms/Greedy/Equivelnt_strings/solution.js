/*
=== Equivalent

divide and conquer 

1) Divide : split each String into two halves

2) Conquer : recursive and checking each String
    if(a1 === b1 and a2 === b2 
        or a1 === b2 and a2 === b1)
        
3) Combine : combine results together 

Analysis : T(N) = non recursive  + recursive Part 
                (Divide and combine) + (conquer)
(Divide) => O(1) if same array 
        ==> O(N) if new array
(combine) => O(1)
(Conquer) => 4T(N/2)

T(N) = 4T(N/2)+ O(N)
By Master Method case1 => N^2
By Master Method case1 => N^2

*/

function EquivalentStrings(a, b) {

    //base case 
    if (a.length == 1)
        return a == b ? true : false;

    //Stopping condition
    if (a == b) {
        return true;
    } else {
        // Division each string into two halves
        a1 = a.substring(1, a.length / 2);
        a2 = a.substring(a.length / 2, a.length);
        b1 = b.substring(1, b.length / 2);
        b2 = b.substring(b.length / 2, b.length);


        //Conquer part is calling the EquivalentStrings 
        // Combine part is and operators
        if (EquivalentStrings(a1, b1) && EquivalentStrings(a2, b2)) {
            return true
        }
        else if (EquivalentStrings(a1, b2) && EquivalentStrings(a2, b1)) {
            return true
        } else
            return false

    }
}




