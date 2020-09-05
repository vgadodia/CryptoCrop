import pandas as pd 
import pickle
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import Lasso
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Loading the csv dataset using Pandas.
print("LOADING DATASET...")
k = pd.read_csv("final_data.csv")
print("DONE.")

# splitting into x and y
x = k.drop("price", axis = 1)
y = k.price

# splitting into training and testing data.
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size=0.25, random_state=42)

print("TRAINING...")

# We tried 3 different models, out of which random forest regressor gave 99.7% score.
regressor = RandomForestRegressor(n_estimators = 100, random_state = 0) 

#regressor = Lasso(alpha=0.1)
#regressor = LinearRegression()

# training model
regressor.fit(X_train, y_train)

print("DONE.")

# testing the model
k = regressor.score(X_test, y_test)
print("Accuracy Score: " + str(k * 100))

# saving model to .pickle file
with open("model.pickle", "wb") as f:
	pickle.dump(regressor, f)