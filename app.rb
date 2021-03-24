#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, {adapter: "sqlite3", database: "pizza.db"}

class Product < ActiveRecord::Base

end

get '/' do	
	@products = Product.all
	erb :index			
end

get'/about' do
	erb :about
end

get '/something' do
	erb :something
  end