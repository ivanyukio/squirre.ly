get '/squirrels/:squirrel_id/trees' do
  @squirrel = Squirrel.find(params[:squirrel_id])
  erb :list_trees
end
