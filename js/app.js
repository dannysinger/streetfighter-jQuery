/*$(document).ready(function() {
    Listen ON Document
    show("RyuStandingStill");
    $ WHEN "MouseEnterEvent" show("RyuReadyPose")
    $ WHEN "MouseLeaveEvent" show("RyuStill")
    $ WHEN "MouseDownEvent" show("RyuThrowPose") 
        AND show("HADOUKEN-moving-x"), hide("AnythingElse"), playSound("Hadouken")
    $ WHEN "MouseUpEvent" show("RyuStill"), hide("AnythingElse")
    $ WHEN "KeyDownPressX" show("COOL"), hide("AnythingElse")
    $ WHEN "KeyUpPressX"  show("RyuStill"), hide("AnythingElse")}
*/
//Manipulate z-index?
/*<div class = "Ryu Box"> 
<img src = "RyuStandingStill">
<img src = "RyuReadyPose">*/ 
/*Z-INDEX
- Stacking Context : Group of elements that have the same common parent
    - <html>Ultimate root in grand stacking context
    - Z-index seems to only work according to root parent stacking context           system
    - There is an order and stacking context for positioned and floated etc.          etc. etc.*/
                  
$(document).ready(function(){
    $(".RyuDiv")
    //When drag mouse on RyuStandingStill
    .mouseenter(function() {
        $(".RyuReadyPose").show()
        $(".RyuStandingStill").hide()
    })
    //When mouseleaves RyuReadyPose
    .mouseleave(function() {
        $(".RyuStandingStill").show()
        $(".RyuReadyPose").hide()
    })  
    //When mousedown on RyuDiv?, Show Ryu Throw    
    .mousedown(function() {
        $(".RyuStandingStill").hide()   
        $(".RyuReadyPose").hide()
        $(".RyuThrow").show()
        $(".Hadouken").show()
        $(".Hadouken").animate({ marginLeft: "+=200px" }, "fast")
    })
    //When mouseup, back to default
    .mouseup(function() {
        $(".RyuStandingStill").show()
        $(".RyuReadyPose").hide()
        $(".RyuThrow").hide()
    })
});
                