import Category, {ICategory} from "../models/category";

class CategoryService {
    async createCategory(data: Partial<ICategory>): Promise<ICategory> {
        const category = new Category(data);
        await category.save();
        return category;
    }

    async getAllCategories(): Promise<ICategory[]> {
        return Category.find().exec();
    }

    async getCategoryById(id: string): Promise<ICategory | null> {
        return Category.findById(id).exec();
    }

    async updateCategory(id: string, data: Partial<ICategory>): Promise<ICategory | null> {
        return Category.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    async deleteCategory(id: string): Promise<ICategory | null> {
        return Category.findByIdAndDelete(id).exec();
    }
}

export default new CategoryService();