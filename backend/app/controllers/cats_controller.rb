class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats.to_json(:except => [:created_at, :updated_at])
    end

    def show
        cat = Cat.find_by(img_id: params[:id])
        if cat.nil?
            render json: {messages: "cat does not exist"}
        else
            render json: cat.to_json(:except => [:created_at, :updated_at]) 
        end
    end

    def create
        cat = Cat.find_by(img_id: params[:img_id])

        if cat
            render :update
        else
            cat = Cat.create(cat_params.merge(id: cat.id))
        end
    end

    def update
        cat = Cat.find_by(img_id: params[:img_id])
        cat.update(cat_params)

        if cat.save
            render json: {messages: "cat saved"}
        else
            render json: {errors: "cat not saved"}
        end
    end

    private

    def cat_params
        params.require(:cat).permit(:img_id, :url, :likes)
    end
end
