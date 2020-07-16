function instructions(job, h)
{
    h.append("<h2>What You Should Do</h2>");
    var str = "<ul>";
    str += "<li>In this video you will see a person <strong>picking up a specific object</strong>. First play the video once and find out which object that is.</li>";
    str += "<li>Once you know which object is being picked-up, you need to <strong>find two distinctive points</strong> on that object's <strong>surface</strong>.</li>";
    str += "<ul>";
    str += "<li>A distinctive point should be a landmark point on the surface that can be <strong>easily identified and tracked</strong>.</li>";
    str += "<li>This can be <strong>a tip or corner point</strong> of the object, or <strong>a point on a printed pattern</strong> on the object's surface.</li>";
    str += "</ul>";
    str += "<li>Once you pick the points, you need to <strong>click on them</strong> and <strong>track them</strong> for the entire video.</li>";
    h.append(str);

    h.append("<h2>Important Instructions<h2>");
    var str = "<ul>";
    str += "<li>A point on the object may become occluded during the pick-up. You should first try to pick points that are <strong>visible (non-occluded) throughout the entire video</strong>.</li>";
    str += "<li>If you cannot find points like that, then you should find points that are <strong>visible as much time as possible</strong> throughout the video. In this case, when a point becomes invisible, mark the <strong>Out of frame or occluded</strong> checkbox for the corresponding sidebar rectangle.</li>";
    str += "<li>Only if you cannot see the picked-up object at all at any moment in the video, you can submit without any annotation.</li>";
    str += "<li>Place your target circle  as precise as possible.</li>";
    str += "<li>We will hand review your work.</li>";
    str += "</ul>";
    h.append(str);

    h.append("<h2>Walkthrough Video and Examples</h2>");
    h.append("<p>You can find a walktrhough video and multiple examples at the bottom of the task page.</p>");
}
