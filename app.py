from flask import Flask, render_template, jsonify
import json, os

app = Flask(__name__)

with open(os.path.join(app.root_path, "data.json"), encoding="utf-8") as f:
    DATA = json.load(f)

@app.route("/")
def home():
    return render_template("index.html", data=DATA)

@app.route("/research/<int:research_id>")
def research_article(research_id):
    article = next((r for r in DATA.get("research", []) if int(r.get("id", 0)) == research_id), None)
    if not article:
        return "Research article not found", 404
    video = next((v for v in DATA.get("all_presentations", []) if int(v.get("id", 0)) == research_id), None)
    return render_template("research_article.html", article=article, video=video, profile=DATA["profile"])

@app.route("/api/data")
def api_data():
    return jsonify(DATA)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
