get '/' do 
  "hello world" 
end

put '/squirrels/:id' do
  redirect '/'
end
