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
    //When drag mouse on RyuStandingStill
    $(".RyuDiv").mouseenter(function() {
        $(".RyuReadyPose").css("display", "block");
        $(".RyuStandingStill").css("display", "none");
    });
    //When mouseleaves RyuReadyPose
    $(".RyuDiv").mouseleave(function() {
        $(".RyuStandingStill").css("display", "block");
        $(".RyuReadyPose").css("display", "none");
    });
    //When mousedown on RyuDiv?, Show Ryu Throw
    $(".RyuDiv").mousedown(function() {
        $(".RyuStandingStill").css("display", "none");
        $(".RyuReadyPose").css("display", "none");
        $(".RyuThrow").css("display", "block");
        $(".Hadouken").css("display", "block");
        $(".Hadouken").animate({ "left": "=-200px"}, "fast");
    });
    $("RyuDiv").mouseup(function() {
        $(".RyuStandingStill").css("display", "block");
        $(".RyuReadyPose").css("display", "none");
        $(".RyuThrow").css("display", "none");
    });
});
                