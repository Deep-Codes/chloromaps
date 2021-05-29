const data = [
    ['Company', 'Home', 'About', 'Inspiration', 'Changelog', 'Contact'],
    ['Resources', 'Documentation', 'Acknowledgement', 'Blogs', 'Open Source', 'Maps'],
    ['Socials', 'Instagram', 'Twitter', 'Github', 'Feedback'],
    ['Policies', 'Terms', 'Privacy', 'Licenses']
];

const temp = [];
data.forEach((e) => {
    const el = [];
    e.forEach((l) =>
        el.push({
            text: l,
            link: ``
        })
    );
    temp.push(el);
});

console.log(temp);
