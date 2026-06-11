# Student Search Application 🎓

## What Does This Program Do?

This is a simple **Student Search Tool** that helps you find students quickly!

### Features:
- **Displays all students**: Shows a list of 10 students with their information:
  - Student's name
  - Marks (score)
  - Class level
  - Address
  
- **Search by name**: Type a student's name and click the Search button to find them instantly
- **Card layout**: Each student is shown in a nice card format that's easy to read

### How It Works:
- Uses **map()** function to display student information in card format
- Uses **filter()** function to search for students by name

---

## 📖 How to Run This Program

### Step 1: Open VS Code

1. Open **Visual Studio Code**
2. Click on **File** → **Open Folder**
3. Navigate to the folder: `e:\2026\day17\map and filter`
4. Click **Select Folder**

### Step 2: Start a Live Server

**Option A - Using Live Server Extension (Easiest):**
1. Right-click on `index.html` file in the sidebar
2. Click **"Open with Live Server"**
3. Your browser will automatically open the website


### Step 2: Use the Application

1. The page opens and shows all students in cards
2. In the **search box**, type the first letter or name of a student
3. Click the **Search button**
4. Only matching students will appear!

### Example:
- Type "A" → shows all students starting with 'A'
- Type "Aa" → shows Aayush and Aayushi
- Clear the search box and click Search again to see all students

---

## 📂 Files in This Project

| File | Purpose |
|------|---------|
| `index.html` | Main page structure |
| `style.css` | Design and styling |
| `script.js` | Student data and search logic |
| `README.md` | This file (instructions) |

---

## 🎨 Customization

Want to add more students? Edit `script.js` and add more objects to the `students` array:

```javascript
{
    Name: "Your Name",
    Marks: 95,
    Class: "5th",
    Address: "Your City"
}
```

---

## 💡 Learning Concepts Used

- **map()** - Transforms student data into HTML cards
- **filter()** - Searches and filters students by name
- **Event listeners** - Detects when the Search button is clicked
- **HTML/CSS/JavaScript** - Frontend web development

---

