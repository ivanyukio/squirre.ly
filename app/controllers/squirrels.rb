require 'json' 
get '/squirrels.json' do 
 squirrels = Squirrel.all
 content_type :json
end

get '/squirrels' do
  @squirrels = Squirrel.all
  erb :list_squirrels
end

get '/squirrels/new' do
  erb :create_squirrels
end 

get '/squirrels/:id' do
  begin
    @squirrel = Squirrel.find( params[:id] ) 
    erb :show_squirrel
  rescue
    404
  end
end

put '/squirrels/:id' do
  begin
    Squirrel.find(params[:id]).update_attributes(params[:squirrel])
    redirect "/squirrels/#{params[:id]}"
  rescue
    404
  end
end

post '/squirrels/create' do
  new_squirrel = Squirrel.create(params[:squirrel])
  redirect "/squirrels/#{new_squirrel.id}"
end

delete '/squirrels/:id' do
  begin
    Squirrel.find(params[:id]).destroy
    redirect "/squirrels"
  rescue
    500
  end
end
