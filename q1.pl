#!/usr/bin/perl 
print "Enter Some random numbers... ";
print "<Ctrl>-D to Terminate \n";
@array = <STDIN>;
chomp @array;
foreach $i (@array) {  
  if ($i%2==0){
      print "\n Even Numbers: $i\n"
  }else{
      print "\n Odd Numbers: $i\n"
  }  
}  

print "\nnumbers: \n@array ";