function instructions(job, h)
{
    h.append("<h1>Important Instructions</h1>");
    h.append("<p>In this task, we ask you to annotate a video in a kitchen scene. You are to click on human body joints and track the joints for the entire video. These instructions will give you tips on how to best use our tool.</p>");

    h.append("<h2>Crash Course</h2>");
    var str = "<ul>";
    str += "<li>Annotate <strong>every body joint</strong> of interest.</li>";
    str += "<li>Click on the joints as precise as possible.</li>";
    if (job.completion > 0)
    {
        var amount = Math.floor(job.completion * 100);
        str += "<li>We will award you a <strong>bonus of " + amount + "&cent; if you annotate every joint</strong>.</li>";
    }
    if (job.skip > 0)
    {
        str += "<li>When the video pauses, adjust your annotations.</li>";
    }
    str += "<li>We will hand review your work.</li>";
    str += "</ul>";
    h.append(str);

    h.append("<h2>Getting Started</h2>");
    h.append("<img src='mpii-circle.jpg' height='96' align='right'>");
    h.append("<p>Click the <strong>New Joint</strong> button to start annotating your first joint. Position your cursor over the view screen to click on a joint of interest. Use the cross hairs to line up your click. This will create a target circle. The target circle should be as precise as possible.</p>");

    h.append("<img src='mpii-classify.jpg' width='156' align='right'>");
    h.append("<p>On the right, directly below the New Joint button, you will find a colorful box. The box is prompting you to input which type of joint you have labeled. Click the correst response.</p>");

    if (job.skip > 0)
    {
        h.append("<p>Press the <strong>Play</strong> button. The video will play. When the video automatically pauses, adjust the target circle. Using your mouse, drag-and-drop the target circle to the correct position. Continue in this fashion until you have reached the end of the video.</p>");
    }
    else
    {
        h.append("<p>Press the <strong>Play</strong> button. The video will begin to play forward. After the joint you are tracking has moved a bit, click <strong>Pause</strong>. Using your mouse, drag-and-drop the target circle to the correct position. Continue in this fashion until you have reached the end of the video.</p>");
    }

    h.append("<p>Once you have reached the end, you should rewind by pressing the rewind button (next to Play) and repeat this process for every joint of interest. You are welcome to annotate multiple joints each playthrough.</p>");

    h.append("<img src='mpii-invisible.jpg' width='196' align='right'>");
    h.append("<p>If a joint leaves the screen, mark the <strong>Out of frame or occluded</strong> checkbox for the corresponding sidebar rectangle. When you mouse over the controls, the corresponding rectangle will light up in the view screen. Likewise, if the joint you are tracking is still in the view frame but the view is obstructed (e.g., a knee behind a table), also mark the <strong>Out of frame or occluded</strong> checkbox. When the joint becomes visible again, remember to uncheck these boxes.</p>");

    h.append("<p>If there are many joints on the screen, it can become difficult to select the right target circle. By pressing the lock button <img src='lock.jpg'> on a joint's sidebar rectangle, you can prevent changes to that track. Press the lock button again to renable modifications.</p>");

    h.append("<p>Remembering which joint correspond to which box can be confusing. If you click on a joint in the view screen, a tooltip will pop that will attempt to remind you of the joint's identity.</p>");
    
    h.append("<p>When you are ready to submit your work, rewind the video and watch it through one more time. Does each target circle follow the joint it is tracking for the entire sequence? If you find a spot where it misses, press <strong>Pause</strong> and adjust the target circle. After you have checked your work, press the <strong>Submit HIT</strong> button. We will pay you as soon as possible.</p>");

    h.append("<h2>How We Accept Your Work</h2>");
    h.append("<p>We will hand review your work and we will only accept high quality work. Your annotations are not compared against other workers. Follow these guidelines to ensure your work is accepted:</p>");

    h.append("<h3>Label Every Joint</h3>")
    h.append('<iframe title="YouTube video player" width="560" height="349" src="https://www.youtube.com/embed/KgjDD10bKww?rel=0" frameborder="0" allowfullscreen></iframe>');
    //h.append("<img src='secret.png'>");
    //h.append("<img src='everyobject.jpg'>");

    h.append("<p>Every joint of interest should be labeled for the entire video. The above work was accepted because every joint has a target circle on it. A joint is not labeled more than once.</p>");

    h.append("<h3>Target Circles Are Precise</h3>");
    h.append("<table><tr><td><img src='mpii-good.jpg' height='144'></td><td><img src='mpii-bad.jpg' height='144'></td></tr><tr><th>Good</th><th>Bad</th></tr></table>");
    h.append("<p>The target circle you click must be precise. The point must be located on the joint as close as possible. The imprecise annotation (for right shoulder) on the right would be rejected while the precise annotation on the left will be accepted.</p>");

    h.append("<h3>Entire Video is Labeled</h3>")
    h.append("<img src='mpii-sequence1.jpg' height='150'> ");
    h.append("<img src='mpii-sequence2.jpg' height='150'> ");
    h.append("<img src='mpii-sequence3.jpg' height='150'><br>");
    h.append("<p>The entire video sequence must be labeled. When a joint moves, you must update its position. A target circle must describe only one joint. You should never change which joint identity a particular target circle tracks.</p>");

    h.append("<h3>Disappearing and Reappearing Joints</h3>");
    h.append("<p>In order for your work to be accepted, you must correctly label joints as they enter and leave the scene. We want you to annotate the moment each joint enters and leaves the scene. As it is often difficult to pinpoint the exact moment an joint enters or leaves the scene, we allow some mistakes here, but only slightly!</p>");

    h.append("<img src='mpii-entering1.jpg' height='120'> <img src='mpii-entering2.jpg' height='120'> <img src='mpii-entering3.jpg' height='120'> <img src='mpii-entering4.jpg' height='120'><br>");

    h.append("<p>If one joint is occluded by other objects (such as a knee occluded by a table), you should mark the disappearing joint as occluded. Likewise, you should start annotating an joint the moment it is no longer occluded anymore.</p>");

    h.append("<img src='mpii-leaving1.jpg' height='120'> <img src='mpii-leaving2.jpg' height='120'> <img src='mpii-leaving3.jpg' height='120'> <img src='mpii-leaving4.jpg' height='120'> <br>");

    h.append("<p>If a joint disappears from the scene and the exact same joint reappears later in the scene, you must mark that joint as back inside the view frame. Do <em>not</em> create a new target circle for its second appearance. Simply find the corresponding right-column rectangle and uncheck the <strong>Out of frame or occluded</strong> checkbox and position the target circle.</p>");

    h.append("<h2>Advanced Features</h2>");
    h.append("<p>We have provided some advanced tools for videos that are especially difficult. Clicking the <strong>Options</strong> button will enable the advanced options.</p>");
    h.append("<ul>" +
        "<li>Clicking <strong>Hide Circles?</strong> will temporarily hide the target circles on the screen. This is useful when the scene becomes too crowded. Remember to click it again to show the circles again!</li>" +
        "<li>The <strong>Slow</strong>, <strong>Normal</strong>, <strong>Fast</strong> buttons will change how fast the video plays back. If the video becomes confusing, slowing the play back speed may help.</li>" +
    "</ul>");

    h.append("<h3>Keyboard Shortcuts</h3>");
    h.append("<p>These keyboard shortcuts are available for your convenience:</p>");
    h.append('<ul class="keyboardshortcuts">' +
        '<li><code>n</code> creates a new joint</li>' +
        '<li><code>t</code> toggles play/pause on the video</li>' +
        '<li><code>r</code> rewinds the video to the start</li>' +
        '<li><code>h</code> hides/shows the circles (only after clicking Options button)</li>' +
        '<li><code>d</code> jump the video forward a bit</li>' +
        '<li><code>f</code> jump the video backward a bit</li>' +
        '<li><code>v</code> step the video forward a tiny bit</li>' +
        '<li><code>c</code> step the video backward a tiny bit</li>' +
        '</ul>');
}
