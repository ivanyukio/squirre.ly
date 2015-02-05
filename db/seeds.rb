zack     = Squirrel.create( name: 'Zack',      tree_mail: 'zack@tree.oak',     tail_length: 123 ) 
jennifer = Squirrel.create( name: 'Jennifer',  tree_mail: 'jennifer@tree.oak', tail_length: 213 ) 
matt     = Squirrel.create( name: 'Matt',      tree_mail: 'matt@tree.oak',     tail_length: 311 ) 
april    = Squirrel.create( name: 'April',     tree_mail: 'april@tree.oak',    tail_length: 459 ) 

oak   = Tree.create( name: 'oak',   layout: 'duplex'      )
maple = Tree.create( name: 'mapel', layout: 'multi-home'  )
pine  = Tree.create( name: 'pine',  layout: 'split-entry' )

zack.trees << oak
zack.trees << maple
zack.trees << pine
jennifer.trees << oak
jennifer.trees << maple
matt.trees << pine
april.trees << pine

zack.save
jennifer.save
matt.save
april.save

squirrels = [zack, jennifer, matt, april]
trees = [oak, maple, pine]

5.times do |nut|
  Nut.create( flavor: 'walnut', squirrel: squirrels.shuffle.slice(1), tree: trees.shuffle.slice(1))
end

5.times do |nut|
  Nut.create( flavor: 'cashew', squirrel: squirrels.shuffle.slice(1), tree: trees.shuffle.slice(1))
end

5.times do |nut|
  Nut.create( flavor: 'acorn', squirrel: squirrels.shuffle.slice(1), tree: trees.shuffle.slice(1))
end
