function menu(){
    var list = document.getElementById('list');
    var description = document.getElementById('insightBody');
    //console.log(list.option[list.selectedIndex].text);
    if(list.options[list.selectedIndex].text === 'Insights'){
        description.innerHTML = '';
    }else if(list.options[list.selectedIndex].text === 'Insight 1'){
        description.innerHTML = '';
        description.innerHTML = '<ul><strong>Key Insight</strong><li>Users want to exercise together or in groups in a way that is engaging and encourages accountability and camaraderie.</li>' + 
        '<ul><li><strong>Depth of Insight</strong></li>' +
            '<ul><strong>User Needs</strong>' +
                '<li>Users want to exercise with others for a variety of reasons. Some would like a partner for outdoor workout safety while others prefer a partner for accountability, camaraderie, competition, and social networking.</li></ul>' + 
            '<ul><strong>User Goals</strong>' + 
                '<li>Users want to exercise in a way that supports accountability, consistency, and camaraderie with others to build healthier habits over time.</li></ul>' + 
            '<ul><strong>User Challenges</strong>' + 
                '<li>Users may face challenges such as failing to find a compatible partner, being restricted by pandemic policies, failing to follow through with exercise itself, and more.</li></ul>' + 
        '</ul><ul><li><strong>Grounding Evidence</strong></li>' + 
            '<ul>' + 
                '<li>In the interviews, interviewees listed accountability, social networking, competitive spirit, and safety as a few reasons why they would prefer exercising with a partner. </li>' + 
                '<li>Irwin, B.C., Scorniaenchi, J., Kerr, N.L. et al. Aerobic Exercise Is Promoted when Individual Performance Affects the Group: A Test of the Kohler Motivation Gain Effect. ann. behav. med. 44, 151-159 (2012).' + '<a href= '+'https://doi.org/10.1007/s12160-012-9367-4'+ '>https://doi.org/10.1007/s12160-012-9367-4</a>' + '</li>' +
                    '<ul>' + 
                        '<li>This research paper concluded that “across sessions, conjunctive condition participants exercised significantly longer (M=21.89 min, SD=±10.08 min) than those in coactive (M=19.77 min, SD=± 9.00 min) and individual (M=10.6 min, SD=±5.84 min) conditions (p<0.05)”, which is also supported by Figure 1 below. </li>' +

                    '<img src=' + 'images/graphInsight1.png' + '></ul>' +
            '</ul>' +
        '</ul></ul>';
    }else if(list.options[list.selectedIndex].text === 'Insight 2'){
        description.innerHTML = '';
        description.innerHTML = '<ul><strong>Key Insight</strong><li>Users are motivated to exercise through the promise of self-actualisation and/or physical rewards, but oftentimes such motivations do not exist or are not compelling enough.</li>' +
        '<ul><li><strong>Depth of Insight</strong></li>' +
            '<ul><strong>User Needs</strong>' +
                '<li>Behind every action is a motivation. Oftentimes, if the motivation is lacking, then nothing is accomplished. As humans, we want to be motivated to action and we often look for methods to do so. Users of the application look to the application as a method of motivating them to exercise through the incentives provided through it.</li></ul>' + 
            '<ul><strong>User Goals</strong>' +
                '<li>Users want to be motivated to exercise. They want to understand what can best motivate them, whether it be in the form of a physical reward or self-actualization. Their hopes are that the application can provide them with sufficient motivation to exercise or even incorporate it into their daily routine.</li></ul>' +
            '<ul><strong>User Challenges</strong>' +
                '<li>Most people do not know what they want or what exactly could motivate them. It may take extensive surveying, questioning, and feedback from the users themselves to help both the developers and the users understand what might best motivate and incentivize someone to exercise.</li></ul>' +
        '</ul><ul><li><strong>Grounding Evidence</strong></li>' +
            '<ul>' +
                '<img src =' + 'images/graphInsight2.png>' +
                '<li>MikeW. “Intrinsic vs. Extrinsic Rewards (and Their Differences from Motivations).” Khoros Community, 5 Feb. 2020, <a href=' + 'https://community.khoros.com/t5/Khoros-Communities-Blog/Intrinsic-vs-Extrinsic-Rewards-and-Their-Differences-from/ba-p/128969.' + '>https://community.khoros.com/t5/Khoros-Communities-Blog/Intrinsic-vs-Extrinsic-Rewards-and-Their-Differences-from/ba-p/128969.</a>' +
                '<ul>' +
                    '<li>Users want all kinds of rewards. When we conducted our interviews, people named all sorts of things from physical rewards such as coupons or even online game rewards to just rewards as simple as being able to enjoy the outdoors. They talked about rewards being tied to motivation. One way to look at the difference is that “motivations generally come before the behavior, but rewards come after the behavior.” One thing that we definitely noticed was that extrinsic rewards were far more preferred than intrinsic. If everyone liked exercising for the sake of exercising, then we would not even need to develop our application!</li></ul>' +

            '</ul>' + 
        '</ul>';
    }else if(list.options[list.selectedIndex].text === 'Insight 3'){
        description.innerHTML = '';
        description.innerHTML = '<ul><strong>Key Insight</strong><li></li></ul>';
    }else if(list.options[list.selectedIndex].text === 'Insight 4'){
        description.innerHTML = '';
    }else{
        description.innerHTML = '';
    }
}