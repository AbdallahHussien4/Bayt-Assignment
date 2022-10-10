#! /bin/env tclsh
# Implement Quick Sort with time complexity O(n*log(n)).
proc quickSort {numbers} {
    #Terminal Condition
    if {[llength $numbers] <= 1} {
        return $numbers
    }
    # Choose the pivot to be first element
    set pivot [lindex $numbers 0]
    # Initialize three empty lists.
    set less [set greater [list]]
    # Splite the list (Divide)
    foreach num $numbers {
        if {$num < $pivot} {
        lappend less $num
        } elseif {$num > $pivot} {
           lappend greater $num 
        } 
    }
    # Concatenate the sorted list (Conquer)
    return [concat [quickSort $less] $pivot [quickSort $greater]]
}

puts [quickSort {3 6 8 7 0 1 4 2 9 5}] 