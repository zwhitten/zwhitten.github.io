webpackJsonp([0xf40c3dab6db0],{510:function(e,t){e.exports={data:{post:{id:"/Users/zwhitten/Projects/zw_blog/content/posts/2017-10-01--the-simplest-git-workflow/index.md absPath of file >>> MarkdownRemark",html:'<h2>Why?</h2>\n<p>I love git. It was a breath of fresh air coming from a heavier Version Control System at a previous job. Git makes coding dare I say, fun?\nGit is extremely powerful. For people unfamiliar with Git it can seem daunting or confusing, either because they’re coming from another VCS or they’ve never used a VCS at all (Shouldn’t they be teaching <em>something</em> in schools these days?)</p>\n<p>Below I’ll outline what I think is one of the simplest workflows you can use on your teams or in your own personal development. The goal is to avoid using some of the more advanced git features which can (when used incorrectly) get developers into trouble. </p>\n<p><strong>Assumptions:</strong></p>\n<ul>\n<li>You have git installed and configured</li>\n<li>There is a remote repository of some kind you want to work with</li>\n<li>Your team doesn’t already have a policy in place about doing things like rebasing before merging into master, etc.</li>\n</ul>\n<h2>Optional Setup</h2>\n<p>If you don’t already have a remote repository setup with write access, you can easily fork an existing repository on github. </p>\n<ol>\n<li>Go to the github page for a project you’d like to contribute to, ex: <a href="https://github.com/github/gitignore">github/gitignore</a></li>\n<li>In the top right corner click the <code class="language-text">fork</code> button. This creates a copy of the repository under your account that you will have full read/write access to. </li>\n<li>On your own repository page click the <code class="language-text">Clone or Download</code> button to get the repository URL for use in the cloning step below.</li>\n</ol>\n<h2>Getting Started</h2>\n<p>Great you’re still here! We’ll first want to pull down a git repository. As an example we’ll use github’s repo with a collection of gitignore files by language type. (If you created a fork in the optional setup replace the git URL below with the URL to your personal repository)</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">git clone https://github.com/zwhitten/gitignore.git</code></pre>\n      </div>\n<p>Which should result in something like this:</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git clone https://github.com/zwhitten/gitignore.git\nCloning into &#39;gitignore&#39;...\nremote: Counting objects: 6896, done.\nremote: Compressing objects: 100% (14/14), done.\nremote: Total 6896 (delta 6), reused 11 (delta 2), pack-reused 6880\nReceiving objects: 100% (6896/6896), 1.37 MiB | 1.67 MiB/s, done.\nResolving deltas: 100% (3686/3686), done.\nChecking connectivity... done.</code></pre>\n      </div>\n<p>This will create a directory on your local machine called “gitignore”. The rest of the commands will be run from inside this directory so go ahead and go into it</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % cd gitignore</code></pre>\n      </div>\n<h2>Working on changes locally</h2>\n<p>By default git will be on the <code class="language-text">master</code> branch when you first open up the project. Once you know the bug or feature you will be working on, you will want to create a feature branch to do this work. Different teams have different conventions for how they like to name their branches. Some like to prefix their feature branches with “feature/” others don’t. For our simple scenario since we won’t actually be pushing our feature branch remotely it won’t matter <em>too</em> much.\nThe gitignore project I checked out contains .gitignore files which can be used in various project types to tell git to ignore specific files or directories. Maybe your team likes to use (but not check in) a series of files ending in “.xyz” in their Java projects and you think the entire github community could benefit from doing the same.</p>\n<h3>Create a local branch</h3>\n<ul>\n<li>\n<p>First we’ll create a feature branch for this change called <code class="language-text">ignore_xyz</code>:</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">% git checkout -b ignore_xyz\nSwitched to a new branch &#39;ignore_xyz&#39;</code></pre>\n      </div>\n<p>OR </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">% git branch ignore_xyz\n% git checkout ignore_xyz\nSwitched to branch &#39;ignore_xyz&#39;</code></pre>\n      </div>\n<p>The first option is a shortcut that does the same thing as the second option: Creates the new branch with the specified name and then switches to it. </p>\n</li>\n</ul>\n<h3>Make your changes</h3>\n<ul>\n<li>Now that we’re on the feature branch we just created we can make our changes to the Java.gitignore file in the directory by adding “*.xyz” to the top of the file.\nGit allows us to see what changes have been made on our branch by running:</li>\n</ul>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git status\nOn branch ignore_xyz\nChanges not staged for commit:\n  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)\n  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)\n\n\tmodified:   Java.gitignore\n\nno changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)</code></pre>\n      </div>\n<p>This is telling us that we’ve modified one file on our branch and even gives us hints about how to revert it or move forward with the change. </p>\n<ul>\n<li>We next add our changed file to the staging area which is git’s way of collecting changes to be put into a commit:</li>\n</ul>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git add Java.gitignore\n % git status\nOn branch ignore_xyz\nChanges to be committed:\n  (use &quot;git reset HEAD &lt;file&gt;...&quot; to unstage)\n\n\tmodified:   Java.gitignore</code></pre>\n      </div>\n<p>Our change is now staged and ready to be committed to our feature branch.</p>\n<ul>\n<li>Commits require a message to be added. It’s a good idea (and helpful to anyone reviewing your change) to include a useful message that describes what your commit contains:</li>\n</ul>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git commit -m &quot;Adding xyz to Java.gitignore file&quot;\n[ignore_xyz 8eafff2] Adding xyz to Java.gitignore file\n 1 file changed, 1 insertion(+)\n\n % git status\nOn branch ignore_xyz\nnothing to commit, working tree clean</code></pre>\n      </div>\n<p>Great! We successfully committed our change, but currently it only exists in our local feature branch. We’ll want to merge this into the master branch to share with everyone else. </p>\n<h3>Switch back to <code class="language-text">master</code></h3>\n<ul>\n<li>\n<p>We’ll switch back over to the master branch using the <code class="language-text">checkout</code> command. After you switch back you’ll notice that your change no longer exists in the file. Don’t worry! It’s still there on your feature branch. If you’re working with a remote repository that other people may have changed since you started working it’s also a good ideal to <code class="language-text">pull</code> the latest changes down:</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">% git checkout master\n% git pull origin master\nAlready up-to-date.</code></pre>\n      </div>\n<p>At this point your master branch should be up to date with the latest changes in the remote repo (the changes out on github), so we should be safe to merge our changes in. </p>\n</li>\n</ul>\n<h3>Merge your changes to <code class="language-text">master</code></h3>\n<p>We’ll use the <em>merge</em> comand to merge our feature branch into the <code class="language-text">master</code> branch, and assuming all goes well you should see something like: </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git merge ignore_xyz\nUpdating 7792e50..8eafff2\nFast-forward\n Java.gitignore | 1 +\n 1 file changed, 1 insertion(+)</code></pre>\n      </div>\n<h2>Pushing changes out</h2>\n<p>Since you’ll want the world to see your changes, you will now push your local <em>master</em> branch out to the <em>master</em> branch on github. If you forked an existing repository up at the beginning this would be the <em>master</em> branch there on your own personal fork of the project.</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git push origin master</code></pre>\n      </div>\n<p>Since we pulled the latest just before we merged there hopefully shouldn’t be any conflicts or errors. If there are errors git is generally pretty good about telling you what happened. One source of errors could be that someone else pushed a change into the master branch between the time you updated and the time you tried to push your change. Re-pulling <em>master</em> and resolving any conflicts should take care of this. </p>\n<h2>Conflicts?!?!?</h2>\n<p>With multiple developers working in the same code there’s always going to be a possiblity of a conflict. This just means that you and someone else have both edited a file at the same time and git isn’t sure how to include both changes. Back when we switched to our <code class="language-text">master</code> branch and pulled down the latest code we might have pulled down another developers changes to the same file we were working in. If this happens, when you try to merge you might see a message similar to:</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git merge ignore_xyz\nAuto-merging Java.gitignore\nCONFLICT (content): Merge conflict in Java.gitignore\nAutomatic merge failed; fix conflicts and then commit the result.</code></pre>\n      </div>\n<p>Someone else modified Java.gitignore too. If we open up the file now, git has indicated the areas which need our attention:</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\n*.abc\n=======\n*.xyz\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; ignore_xyz</code></pre>\n      </div>\n<p>The area between the “HEAD” line and the ”======” line indicates the changes that we pulled in from the remote repository while the changes below the ”=======” line and the “ignore_xyz” line indicate our own changes. In this case, someone added ”<em>.abc” at the same location we added ”</em>.xyz”. Since we don’t want to mess up their work the solution would be to leave both lines in place. We then remove the ”&#x3C;&#x3C;&#x3C;&#x3C;”, ”======”, and ”>>>>” lines to let git know we’ve sorted it out. </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git status\nOn branch develop\nYou have unmerged paths.\n  (fix conflicts and run &quot;git commit&quot;)\n  (use &quot;git merge --abort&quot; to abort the merge)\n\nUnmerged paths:\n  (use &quot;git add &lt;file&gt;...&quot; to mark resolution)\n\n\tboth modified:   Java.gitignore\n\nno changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)</code></pre>\n      </div>\n<p>Even though we’ve fixed the conflict we have to let git know by staging the combined file(s) and committing the results. </p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git add Java.gitignore\n % git status\nOn branch develop\nAll conflicts fixed but you are still merging.\n  (use &quot;git commit&quot; to conclude merge)\n\nChanges to be committed:\n\n\tmodified:   Java.gitignore</code></pre>\n      </div>\n<p>And of course we’ll want to provide a useful commit message to indicate that the new commit was the result of a merge:</p>\n<div class="gatsby-highlight" data-language="shell">\n      <pre class="language-shell"><code class="language-shell"> % git commit -m &quot;Merged Java.gitignore change for .xyz file extensions&quot;\n % git push origin master</code></pre>\n      </div>',htmlAst:{type:"root",children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Why?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I love git. It was a breath of fresh air coming from a heavier Version Control System at a previous job. Git makes coding dare I say, fun?\nGit is extremely powerful. For people unfamiliar with Git it can seem daunting or confusing, either because they’re coming from another VCS or they’ve never used a VCS at all (Shouldn’t they be teaching "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"something"}]},{type:"text",value:" in schools these days?)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Below I’ll outline what I think is one of the simplest workflows you can use on your teams or in your own personal development. The goal is to avoid using some of the more advanced git features which can (when used incorrectly) get developers into trouble. "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Assumptions:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"You have git installed and configured"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"There is a remote repository of some kind you want to work with"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Your team doesn’t already have a policy in place about doing things like rebasing before merging into master, etc."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Optional Setup"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you don’t already have a remote repository setup with write access, you can easily fork an existing repository on github. "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Go to the github page for a project you’d like to contribute to, ex: "},{type:"element",tagName:"a",properties:{href:"https://github.com/github/gitignore"},children:[{type:"text",value:"github/gitignore"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"In the top right corner click the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"fork"}]},{type:"text",value:" button. This creates a copy of the repository under your account that you will have full read/write access to. "}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"On your own repository page click the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Clone or Download"}]},{type:"text",value:" button to get the repository URL for use in the cloning step below."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Getting Started"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Great you’re still here! We’ll first want to pull down a git repository. As an example we’ll use github’s repo with a collection of gitignore files by language type. (If you created a fork in the optional setup replace the git URL below with the URL to your personal repository)"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"git clone https://github.com/zwhitten/gitignore.git"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Which should result in something like this:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:" % git clone https://github.com/zwhitten/gitignore.git\nCloning into 'gitignore'...\nremote: Counting objects: 6896, done.\nremote: Compressing objects: 100% (14/14), done.\nremote: Total 6896 (delta 6), reused 11 (delta 2), pack-reused 6880\nReceiving objects: 100% (6896/6896), 1.37 MiB | 1.67 MiB/s, done.\nResolving deltas: 100% (3686/3686), done.\nChecking connectivity... done."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This will create a directory on your local machine called “gitignore”. The rest of the commands will be run from inside this directory so go ahead and go into it"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:" % cd gitignore"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Working on changes locally"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"By default git will be on the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]},{type:"text",value:" branch when you first open up the project. Once you know the bug or feature you will be working on, you will want to create a feature branch to do this work. Different teams have different conventions for how they like to name their branches. Some like to prefix their feature branches with “feature/” others don’t. For our simple scenario since we won’t actually be pushing our feature branch remotely it won’t matter "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"too"}]},{type:"text",value:" much.\nThe gitignore project I checked out contains .gitignore files which can be used in various project types to tell git to ignore specific files or directories. Maybe your team likes to use (but not check in) a series of files ending in “.xyz” in their Java projects and you think the entire github community could benefit from doing the same."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Create a local branch"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"First we’ll create a feature branch for this change called "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"ignore_xyz"}]},{type:"text",value:":"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"% git checkout -b ignore_xyz\nSwitched to a new branch 'ignore_xyz'"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"OR "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"% git branch ignore_xyz\n% git checkout ignore_xyz\nSwitched to branch 'ignore_xyz'"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The first option is a shortcut that does the same thing as the second option: Creates the new branch with the specified name and then switches to it. "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Make your changes"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Now that we’re on the feature branch we just created we can make our changes to the Java.gitignore file in the directory by adding “*.xyz” to the top of the file.\nGit allows us to see what changes have been made on our branch by running:"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:' % git status\nOn branch ignore_xyz\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git checkout -- <file>..." to discard changes in working directory)\n\n\tmodified:   Java.gitignore\n\nno changes added to commit (use "git add" and/or "git commit -a")'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is telling us that we’ve modified one file on our branch and even gives us hints about how to revert it or move forward with the change. "}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"We next add our changed file to the staging area which is git’s way of collecting changes to be put into a commit:"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:' % git add Java.gitignore\n % git status\nOn branch ignore_xyz\nChanges to be committed:\n  (use "git reset HEAD <file>..." to unstage)\n\n\tmodified:   Java.gitignore'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Our change is now staged and ready to be committed to our feature branch."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Commits require a message to be added. It’s a good idea (and helpful to anyone reviewing your change) to include a useful message that describes what your commit contains:"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:' % git commit -m "Adding xyz to Java.gitignore file"\n[ignore_xyz 8eafff2] Adding xyz to Java.gitignore file\n 1 file changed, 1 insertion(+)\n\n % git status\nOn branch ignore_xyz\nnothing to commit, working tree clean'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Great! We successfully committed our change, but currently it only exists in our local feature branch. We’ll want to merge this into the master branch to share with everyone else. "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Switch back to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We’ll switch back over to the master branch using the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"checkout"}]},{type:"text",value:" command. After you switch back you’ll notice that your change no longer exists in the file. Don’t worry! It’s still there on your feature branch. If you’re working with a remote repository that other people may have changed since you started working it’s also a good ideal to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"pull"}]},{type:"text",value:" the latest changes down:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"% git checkout master\n% git pull origin master\nAlready up-to-date."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"At this point your master branch should be up to date with the latest changes in the remote repo (the changes out on github), so we should be safe to merge our changes in. "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Merge your changes to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We’ll use the "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"merge"}]},{type:"text",value:" comand to merge our feature branch into the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]},{type:"text",value:" branch, and assuming all goes well you should see something like: "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:" % git merge ignore_xyz\nUpdating 7792e50..8eafff2\nFast-forward\n Java.gitignore | 1 +\n 1 file changed, 1 insertion(+)"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Pushing changes out"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Since you’ll want the world to see your changes, you will now push your local "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"master"}]},{type:"text",value:" branch out to the "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"master"}]},{type:"text",value:" branch on github. If you forked an existing repository up at the beginning this would be the "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"master"}]},{type:"text",value:" branch there on your own personal fork of the project."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:" % git push origin master"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Since we pulled the latest just before we merged there hopefully shouldn’t be any conflicts or errors. If there are errors git is generally pretty good about telling you what happened. One source of errors could be that someone else pushed a change into the master branch between the time you updated and the time you tried to push your change. Re-pulling "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"master"}]},{type:"text",value:" and resolving any conflicts should take care of this. "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Conflicts?!?!?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"With multiple developers working in the same code there’s always going to be a possiblity of a conflict. This just means that you and someone else have both edited a file at the same time and git isn’t sure how to include both changes. Back when we switched to our "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"master"}]},{type:"text",value:" branch and pulled down the latest code we might have pulled down another developers changes to the same file we were working in. If this happens, when you try to merge you might see a message similar to:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:" % git merge ignore_xyz\nAuto-merging Java.gitignore\nCONFLICT (content): Merge conflict in Java.gitignore\nAutomatic merge failed; fix conflicts and then commit the result."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"
},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Someone else modified Java.gitignore too. If we open up the file now, git has indicated the areas which need our attention:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:"<<<<<<< HEAD\n*.abc\n=======\n*.xyz\n>>>>>>> ignore_xyz"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The area between the “HEAD” line and the ”======” line indicates the changes that we pulled in from the remote repository while the changes below the ”=======” line and the “ignore_xyz” line indicate our own changes. In this case, someone added ”"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:".abc” at the same location we added ”"}]},{type:"text",value:".xyz”. Since we don’t want to mess up their work the solution would be to leave both lines in place. We then remove the ”<<<<”, ”======”, and ”>>>>” lines to let git know we’ve sorted it out. "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:' % git status\nOn branch develop\nYou have unmerged paths.\n  (fix conflicts and run "git commit")\n  (use "git merge --abort" to abort the merge)\n\nUnmerged paths:\n  (use "git add <file>..." to mark resolution)\n\n\tboth modified:   Java.gitignore\n\nno changes added to commit (use "git add" and/or "git commit -a")'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Even though we’ve fixed the conflict we have to let git know by staging the combined file(s) and committing the results. "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:' % git add Java.gitignore\n % git status\nOn branch develop\nAll conflicts fixed but you are still merging.\n  (use "git commit" to conclude merge)\n\nChanges to be committed:\n\n\tmodified:   Java.gitignore'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And of course we’ll want to provide a useful commit message to indicate that the new commit was the result of a merge:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"shell"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-shell"]},children:[{type:"element",tagName:"code",properties:{className:["language-shell"]},children:[{type:"text",value:' % git commit -m "Merged Java.gitignore change for .xyz file extensions"\n % git push origin master'}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/the-simplest-git-workflow/",prefix:"2017-10-01"},frontmatter:{title:"The Simplest Git Workflow",subTitle:null,comments:!0,cover:{childImageSharp:{resize:{src:"/static/giuseppe-mondi-801289-unsplash-6d78eab0e19fb2b26796cabfaf9f2735-ada8c.jpg"}}}}},author:{id:"/Users/zwhitten/Projects/zw_blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Z. Whitten</strong> - If you like this post you should check out <a href="/">more</a></p>'},footnote:{id:"/Users/zwhitten/Projects/zw_blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>this site is the personal blog of <a href="https://zdub.io">@zwhitten</a></li>\n<li>built using <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a></li>\n<li>hosted on <a href="https://github.com/zwhitten/zwhitten.github.io">Github</a></li>\n<li>photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{title:"Codes of Electric Sheep"}}},pathContext:{slug:"/the-simplest-git-workflow/"}}}});
//# sourceMappingURL=path---the-simplest-git-workflow-298177c5efbf18db9f14.js.map