#Usage: rake write["title of post"]
desc "Given a title as an argument, create a new post file"
task :write, [:title] do |t, args|
  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{args.title.gsub(/\s/, '_').downcase}.md"
  path = File.join("_posts", filename)
  if File.exist? path; raise RuntimeError.new("Won't clobber #{path}"); end
  File.open(path, 'w') do |file|
    file.write <<-EOS
---
layout: post
title: #{args.title}
tags: 
date: #{Time.now.strftime('%Y-%m-%d %k:%M:%S')}
dutch: false
---
EOS
    end
    puts "Post created."
    puts "Now open #{path} in vim"
end

desc "Run Jekyll in dev mode"
task :dev do
  system('jekyll serve --watch')
end
