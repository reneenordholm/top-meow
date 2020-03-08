class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats.to_json(:except => [:created_at, :updated_at])
    end

    # def show
    #     binding.pry
    #     cats = Cat.all
    #     cat = cats.sort { |k1, k2| k2[:likes] <=> k1[:likes] }

    #     if top_meow
    #         cat.first
    #         render json: cat.to_json(:except => [:created_at, :updated_at])
    #     else
    #         cat.last
    #         render json: cat.to_json(:except => [:created_at, :updated_at])
    #     end
    # end

    def create
        cat = Cat.find_by(img_id: params[:img_id])
        
        if cat != nil
            cat.likes = cat.likes + params[:likes]
            cat.update(cat_params)
            cat.save

            render json: cat.to_json(:except => [:created_at, :updated_at])
        else
            Cat.create(cat_params)
        end
    end

    private

    def cat_params
        params.require(:cat).permit(:img_id, :url, :likes)
    end
end
