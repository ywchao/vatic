function instructions(job, h)
{
    h.append("<h1>Important Instructions</h1>");
    h.append("<p>In this task, we ask you to annotate a video. You are to click on every visible human hand joint of interest in the image. These instructions will give you tips on how to best use our tool.</p>");

    h.append("<h2>Crash Course</h2>");
    var str = "<ul>";
    str += "<li>Annotate <strong>every visible joint</strong> of interest.</li>";
    str += "<li>Place your target circles as precise as possible.</li>";
    if (job.perobject > 0)
    {
        var amount = Math.floor(job.perobject * 100);
        str += "<li>We will pay you <strong>" + amount + "&cent; for each joint</strong> you annotate.</li>";
    }
    if (job.completion > 0)
    {
        var amount = Math.floor(job.completion * 100);
        str += "<li>We will award you a <strong>bonus of " + amount + "&cent; if you annotate every joint</strong>.</li>";
    }
    str += "<li>We will hand review your work.</li>";
    str += "</ul>";
    h.append(str);

    h.append("<h2>Getting Started</h2>");
    h.append("<img src='dycb-circle.png' height='96' align='right'>");
    h.append("<p>Click the <strong>New Joint</strong> button to start annotating your first joint. Position your cursor over the view screen to click on a joint of interest. Use the cross hairs to line up your click. This will create a target circle. The target circle should be as precise as possible.</p>");

    h.append("<img src='dycb-classify.png' width='170' align='right'>");
    h.append("<p>On the right, directly below the New Joint button, you will find a colorful box. The box is prompting you to input which type of joint you have labeled. Click the correst response.</p>");

    if (job.perobject > 0)
    {
        h.append("<p>Repeat this process for every joint of interest. You can skip joints that are invisible (out of frame or  occluded). We will pay you a bonus for every joint that you annotate.</p>");
    }
    else
    {
        h.append("<p>Repeat this process for every joint of interest. You can skip joints that are invisible (out of frame or  occluded).</p>");
    }

    h.append("<p>If there are many joints on the screen, it can become difficult to select the right target circle. By pressing the lock button <img src='lock.jpg'> on a joint's sidebar rectangle, you can prevent changes to that track. Press the lock button again to renable modifications.</p>");

    h.append("<p>Remembering which joint correspond to which joint can be confusing. If you click on a joint in the view screen, a tooltip will pop that will attempt to remind you of the joint's identity.</p>");
    
    h.append("<p>When you are ready to submit your work, review your annotations one more time. Does each target circle align with the associated joint? After you have checked your work, press the <strong>Submit HIT</strong> button. We will pay you as soon as possible.</p>");

    h.append("<h2>How We Accept Your Work</h2>");
    h.append("<p>We will hand review your work and we will only accept high quality work. Your annotations are not compared against other workers. Follow these guidelines to ensure your work is accepted:</p>");

    h.append("<h3>Label Every Joint</h3>")
    h.append("<img src='dycb-everyjoint.png' height='400'>");
    //h.append("<img src='secret.png'>");
    //h.append("<img src='everyobject.jpg'>");

    if (job.perobject > 0)
    {
        h.append("<p>Every visible joint of interest should be labeled for the image. The above work was accepted because every visible joint has a target circle on it. A joint is not labeled more than once. We will pay you a bonus for every joint you annotate.</p>");
    }
    else
    {
        h.append("<p>Every visible joint of interest should be labeled for the image. The above work was accepted because every visible joint has a target circle on it. A joint is not labeled more than once.</p>");
    }

    h.append("<h3>Target Circles Are Precise</h3>");
    h.append("<table><tr><td><img src='dycb-good.png' height='164'></td><td><img src='dycb-bad.png' height='164'></td></tr><tr><th>Good</th><th>Bad</th></tr></table>");
    h.append("<p>The target circles you click must be precise. The center point must be located on the joint as precise as possible. The imprecise annotation (for thumb tip) on the right would be rejected while the precise annotation on the left will be accepted.</p>");

    h.append("<h2>Advanced Features</h2>");
    h.append("<p>We have provided some advanced tools for videos that are especially difficult. Clicking the <strong>Options</strong> button will enable the advanced options.</p>");
    h.append("<ul>" +
        "<li>Clicking <strong>Hide Circles?</strong> will temporarily hide the target circles on the screen. This is useful when the scene becomes too crowded. Remember to click it again to show the target circles again!</li>" +
    "</ul>");

    h.append("<h3>Keyboard Shortcuts</h3>");
    h.append("<p>These keyboard shortcuts are available for your convenience:</p>");
    h.append('<ul class="keyboardshortcuts">' +
        '<li><code>n</code> creates a new joint</li>' +
        '<li><code>h</code> hides/shows the circles (only after clicking Options button)</li>' +
        '</ul>');
}
