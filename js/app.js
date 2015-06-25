$(document).ready(function() {
    Listen ON Document
    show("RyuStandingStill");
    $ WHEN "MouseEnterEvent" show("RyuReadyPose")
    $ WHEN "MouseLeaveEvent" show("RyuStill")
    $ WHEN "MouseDownEvent" show("RyuThrowPose") 
        AND show("HADOUKEN-moving-x"), hide("AnythingElse"), playSound("Hadouken")
    $ WHEN "MouseUpEvent" show("RyuStill"), hide("AnythingElse")
    $ WHEN "KeyDownPressX" show("COOL"), hide("AnythingElse")
    $ WHEN "KeyUpPressX"  show("RyuStill"), hide("AnythingElse")}
                