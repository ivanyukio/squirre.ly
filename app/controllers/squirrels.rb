require 'json'

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
    Squirrel.find(params[:id]).update_attributes(params[:squirrel])
    redirect "/squirrels/#{params[:id]}"
end

post '/squirrels/create' do
  new_squirrel = Squirrel.create(params[:squirrel])
  redirect "/squirrels/#{new_squirrel.id}"
end

delete '/squirrels/:id' do
  Squirrel.find(params[:id]).destroy
  redirect "/squirrels"
end

################### AJAX Routes ######################### 

get '/squirrels.json' do
  content_type :json
  Squirrel.all.map{ |sqrl| sqrl.to_hash }.to_json
end

get '/squirrels/:id/show.json' do
 content_type :json
 Squirrel.find(params[:id]).to_hash.to_json 
end

post '/squirrels/create.json' do
  content_type :json
  squirrel = Squirrel.create( params )
  squirrel.to_hash.to_json
end

put '/squirrels/:id/update.json' do
  params.delete "splat"
  params.delete "captures"
  Squirrel.find(params[:id]).update_attributes(params)
  redirect "/squirrels/#{params[:id]}"
end

delete '/squirrels/:id/destroy.json' do
 content_type :json
 Squirrel.find(params[:id]).destroy
 redirect "/squirrels" 
end

