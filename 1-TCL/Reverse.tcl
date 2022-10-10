#! /bin/env tclsh
proc reverse {sentence} {
    set s [split $sentence " "]
    set result ""
    for {set i [expr [llength $s]-1]} {$i >= 0} {incr i -1} {
        lappend result [lindex $s $i]
    }
    return $result
}

puts [reverse {Welcome To You}] 