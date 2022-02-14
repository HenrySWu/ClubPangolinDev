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
                        '<img src=' + 'images/graphInsight1.png>' +
                        '<li>Figure 1: This table represents the athletic performance of individuals who were tasked with exercising alone (individual), exercising with a partner independently (coactive), and exercising with a partner where the last person standing determined performance readings (conjunctive).</li>' +
                    '</ul>' +
            '</ul>' +
            '<ul>' +
                '<li>Wing RR, Jeffery RW. Benefits of recruiting participants with friends and increasing social support for weight loss and maintenance. J Consult Clin Psychol. 1999 Feb;67(1):132-8. doi: 10.1037//0022-006x.67.1.132. PMID: 10028217.</li>' + 
                '<ul>' + 
                    '<li>This research paper concluded that “in those recruited alone and given SBT [(standard behavioral treatment)], 76% completed treatment and 24% maintained their weight loss in full from Months 4 to 10 … [while] among those recruited with friends and given SBT plus social support, 95% completed treatment and 66% maintained their weight loss in full.”</li>' +
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
                '<li>MikeW. “Intrinsic vs. Extrinsic Rewards (and Their Differences from Motivations).” Khoros Community, 5 Feb. 2020, <a href=' + 'https://community.khoros.com/t5/Khoros-Communities-Blog/Intrinsic-vs-Extrinsic-Rewards-and-Their-Differences-from/ba-p/128969' + '>https://community.khoros.com/t5/Khoros-Communities-Blog/Intrinsic-vs-Extrinsic-Rewards-and-Their-Differences-from/ba-p/128969.</a>' +
                '<ul>' +
                    '<li>Users want all kinds of rewards. When we conducted our interviews, people named all sorts of things from physical rewards such as coupons or even online game rewards to just rewards as simple as being able to enjoy the outdoors. They talked about rewards being tied to motivation. One way to look at the difference is that “motivations generally come before the behavior, but rewards come after the behavior.” One thing that we definitely noticed was that extrinsic rewards were far more preferred than intrinsic. If everyone liked exercising for the sake of exercising, then we would not even need to develop our application!</li></ul>' +
                    '<li>Richter, Ganit, et al. “ Studying Gamification: The Effect of Rewards and Incentives on Motivation .” UChicago Lectures, University of Chicago, 2015, <a href=' + 'https://www.classes.cs.uchicago.edu/archive/2019/fall/20900-1/lecs/GamificationChapter.pdf' + '>https://www.classes.cs.uchicago.edu/archive/2019/fall/20900-1/lecs/GamificationChapter.pdf</a>' + 
                '<ul>' + 
                    '<li>While interviewees talked mainly about extrinsic rewards, intertwining intrinsic rewards and motivations are also of critical importance. For example, many mentioned how they wanted to stay healthy and feel good about their body and themselves. Research suggests that “careful selection and implementation of these motivators will trigger internal motivation and aid in maintaining it.” In games, this is often done through the existence of a leaderboard or a progress bar to generate excitement and commitment to complete a task or repeat an experience. Likewise, we believe such methods can help create motivation for users to exercise and help them in discovering what may motivate them.</li></ul>' +
                    '<li>Muntean, C. I. (2011). Raising engagement in e-learning through gamification. Proceedings 6th International Conference on Virtual Learning ICVL (pp. 323–329), Cluj-Napoca, Romania, Europe.</li>' +
                '<ul>' +
                    '<li>One insight we gathered from asking our interviewees about how they might be motivated to exercise was the potential for gamification. In a research article written by Muntean, he noted that gamification has the ability to combine two motivations: “on one hand using extrinsic rewards such as levels, points, badges to improve engagement while striving to raise feelings of achieving mastery, autonomy, sense of belonging.” These techniques have been successfully incorporated across all kinds of applications and software.</li></ul>' +
            '</ul>' + 
        '</ul>';
    }else if(list.options[list.selectedIndex].text === 'Insight 3'){
        description.innerHTML = '';
        description.innerHTML = '<ul><strong>Key Insight</strong><li>Users want to exercise but cannot due to poor time management & stress regarding their jobs, school work, etc.</li>' + 
        '<ul><li><strong>Depth of Insight</strong></li>' + 
            '<ul><strong>User Needs</strong>' + 
                '<li>We expect the user to manage time more efficiently so that the user obtains their goal of being more active. As a university affiliate, when affiliates are prevented from exercising because of poor time management they tend to set other priorities back.</li></ul>' + 
            '<ul><strong>User Goals</strong>' +
                '<li>Users want to better understand how to manage time more efficiently and add more physical activity into their daily tasks seamlessly.</li>' + 
                '<li>Users want to feel rewarded for the tasks they have completed in order to feel accomplished and understand how to manage their daily tasks more effectively.</li></ul>' +
            '<ul><strong>User Challenges</strong>' +
                '<li>Users have a misunderstanding of how little time it takes to be more active.</li>' + 
                '<li>Users are unmotivated and feel as though exercise is a burden that they have to go out of their way to do.</li>' +
                '<li>Users are uneducated on how exercise can help relieve stress and have a positive impact on mental health</li></ul>' +
        '</ul>' +
        '<ul><li><strong>Grounding Evidence</strong></li>' + 
            '<ul>' + 
                '<li>“Why Time Management Is Ruining Our Lives | Oliver Burkeman.” The Guardian, Guardian News and Media, 22 Dec. 2016,' + '<a href=' + 'https://www.theguardian.com/technology/2016/dec/22/why-time-management-is-ruining-our-lives>' + 'https://www.theguardian.com/technology/2016/dec/22/why-time-management-is-ruining-our-lives</a></li>' +  
                '<ul>' +
                    '<li>“techniques designed to enhance one’s personal productivity seem to exacerbate the very anxieties they were meant to allay”</li>' + 
                    '<li>Applications that promote “personal productivity” are considered as techniques that can “exacerbate” stress and anxiety linked to task management seen highly in college students.</li></ul>' + 
                '<li>“Impact of Time Management Behaviors on Undergraduate Engineering Students’ Performance.” SAGE Open, vol. 9, no. 1, 2019, p. 215824401882450.' + '<a href=' + 'https://doi.org/10.1177/2158244018824506>' + 'https://doi.org/10.1177/2158244018824506</a></li>' +
                '<ul>' +
                    '<li>O’Connell (2014) also suggests that the balance between sleep, exercise, and appropriate diet alongside an increase in “downtime” would lead to a decrease in student illness, therefore suggesting the link between time management and physical health."</li>' +
                    '<li>Exercise is linked to promoting healthy habits that decrease “student illness”. By implementing exercise into student’s lives we may decrease student’s stress.</li></ul>' +
                '<li>Amolegbea. “Busy College Students: You Too Can Exercise!” UNC Healthy Heels, 3 Sept. 2013,' + '<a href=' + 'https://www.healthyheels.org/2013/09/03/busy-college-students-you-too-can-exercise>' + 'https://www.healthyheels.org/2013/09/03/busy-college-students-you-too-can-exercise</a></li>' + 
                '<ul>' + 
                    '<li>"Once classes begin and my Google calendar gradually becomes a multicolored depiction of the overcommitted college student, all that working-out momentum I build up over the long break tends to peter out, and exercise time gets squeezed out by other responsibilities."</li>' +
                    '<li>University of North Carolina states that exercise shouldn’t require a large amount of time. We can learn to incorporate exercise seamlessly into our daily tasks. Managing what to do during task breaks can help improve time management as well as relieve stress.</li>' +
                '</ul>' +
            '</ul>' +
        '</ul>';
    }else if(list.options[list.selectedIndex].text === 'Insight 4'){
        description.innerHTML = '';
        description.innerHTML = '<ul><strong>Key Insight</strong><li>Users want to track and be rewarded for exercising but are limited by tools’ traditional definitions of exercise.</li>' + 
        '<ul><li><strong>Depth of Insight</strong></li>' + 
            '<ul><strong>User Needs</strong>' +
                '<li>We hope that users can better understand the sports they usually do. Monitor daily physical activity and reward users with incentives to do more exercise to stay fit.</li></ul>' +
            '<ul><strong>User Goals</strong>' + 
                '<li>Users hope that the software can collect more kinds of sports data, such as cycling, climbing, swimming and so on.</li>' +
                '<li>At the same time, based on these achieved sports goals, get some rewards. Incentivize users to follow through with rewards.</li></ul>' + 
            '<ul><strong>User Challenges</strong>' + 
                '<li>Users are encouraged to maintain exercise habits while receiving rewards, rather than disrupting the user’s fitness program or terminating the user’s fitness program.</li>' +
                '<li>Some sports are difficult to measure accurately, such as weight-bearing anaerobic training, trampoline, rock climbing, etc.</li>' + 
                '<li>Inappropriate rewards lower users’ expectations for prizes.</li></ul>' +
        '</ul>' + 
        '<ul><li><strong>Grounding Evidence</strong></li>' + 
            '<ul>' + 
                '<li>Ray, R., & Neily, C. (2021, April 30). A better path forward for Criminal Justice: Police Reform. Brookings. Retrieved February 12, 2022,' + '<a href=' + 'https://www.brookings.edu/research/a-better-path-forward-for-criminal-justice-police-reform/>' + 'https://www.brookings.edu/research/a-better-path-forward-for-criminal-justice-police-reform/</a></li>' + 
                '<ul>' + 
                    '<li>“The most successful intervention, though, turned out to be giving people the equivalent of 9 cents’ worth of reward points if they returned to the gym after missing a planned workout.”</li>' + 
                    '<li>Through research on gym fitness, it has been found that the way to make people more involved in fitness and exercise is to give a certain amount of rewards. This method is much better than just the effects and advantages of popular science fitness.</li></ul>' + 
            '</ul>' + 
            '<ul>' + 
                    '<img src=' + 'images/insight3.png>' +
                    '<li>Most sports trackers for wearable devices are not cheap, and accurate tracking devices require users to invest a lot of money.</li>' + 
                    '<li>If the user simply uses the mobile phone software to track the movement, it will become very inconvenient to wear and track.</li>' +
            '</ul>' + 
        '</ul>' + 
        '</ul>'; 

    }else{
        description.innerHTML = '';
    }
}